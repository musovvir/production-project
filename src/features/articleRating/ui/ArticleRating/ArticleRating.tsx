import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRatings, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRatings({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();

    const rating = data?.[0];

    const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starCount,
                feedback,
            });
        } catch (e) {
            // handle error
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starCount: number, feedback?: string) => {
        handleRateArticle(starCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starCount: number) => {
        handleRateArticle(starCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет нам улучшить качество')}
            hasFeedback

        />
    );
});

export default ArticleRating;
