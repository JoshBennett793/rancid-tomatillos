/* eslint-disable no-undef */

describe('', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'fetchResponse.json'
    })
    cy.visit('http://localhost:5173/')
  })

  it('Should display title of application on main page', () => {
    cy.url().should('eq', 'http://localhost:5173/')
      .get('.header').contains('Rancid Tomatillos')

  })

  it('Should display movies on home page', () => {
    cy.url().should('eq', 'http://localhost:5173/')
      .get('.all-movies-container').children().should('have.length', 2)
      .get('.movie-card').first().contains('Black Adam')
      .get('.movie-card').last().contains('The Woman King')
      .get('.movie-poster').first().find('img').should()
  })
})



// Should display all movies
// contain img
// contain movie title
// .get('.movie-card').first().contains('Black Adam') is there another way to check movie title? 
// test image alt text?
// contain rating
// 
