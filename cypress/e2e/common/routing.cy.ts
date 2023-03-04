import { selectorByTestId } from '../../helpers/selectorByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectorByTestId('MainPage')).should('exist');
        });
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectorByTestId('MainPage')).should('exist');
        });
        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/someRoute');
            cy.get(selectorByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectorByTestId('ProfilePage')).should('exist');
        });
        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectorByTestId('ArticlesPage')).should('exist');
        });
    });
});
