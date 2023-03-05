import { User } from '../../../src/entities/User';

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asas' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 87,
            currency: 'USD',
            city: 'Grozny',
            username: 'testuser',
            avatar: 'https://s.wsj.net/public/resources/images/BN-JC756_cover_J_20150626104454.jpg',
            country: 'Russia',
        },
    });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<User>;
      resetProfile(profileId: string): Chainable<User>;
    }
  }
}
