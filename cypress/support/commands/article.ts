import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Экономика',
    img: 'https://img.freepik.com/free-vector/science-word-concept_23-2148533907.jpg?w=2000',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'ECONOMICS',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asas' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asas' },
    });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
