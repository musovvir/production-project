import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRatings,
    useRateProfile,
} from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRatings({
        profileId,
        userId: userData?.id ?? '',
    });
    const [rateProfileMutation] = useRateProfile();

    const rating = data?.[0];

    const handleRateProfile = useCallback((starCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateProfile(starCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starCount: number) => {
        handleRateProfile(starCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените пользователя')}
            feedbackTitle={t('Оставьте свой отзыв о данном пользователе, это поможет нам улучшить качество')}
            hasFeedback
        />
    );
});

export default ProfileRating;
