/* eslint-disable no-undef */

describe('', () => {

  let blackAdamBrokenFile = 'brokenBlackAdam.json'

  const stubBrokenMoviePoster = (code, fixtureFile) => {
    cy.intercept(
      'GET',
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies`,
      {
        statusCode: code,
        fixture: fixtureFile
      }
    )
  }

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'allMovies.json'
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
    
    cy.get('.all-movies-container').first()
    .get('.movie-card').first().contains('h2', 'Black Adam')
    .get('.movie-card').first().find('.movie-poster[alt="Movie poster for Black Adam"]')
    .get('.all-movies-container').first().find('.movie-card').find('.tomatillo').find('.movie-rating', '4.0')
    
    cy.get('.all-movies-container').last()
    .get('.all-movies-container').last().find('.movie-card').find('h2', 'The Woman King')
    .get('.movie-card').find('.movie-poster[alt="Movie poster for The Woman King"]')
    .get('.all-movies-container').last().find('.movie-card').find('.tomatillo').find('.movie-rating', '4.0')
  })
  
  it('Should display error message with a 500 level error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500})
      .get('.error-msg').contains('p', 'There seems to be a problem with your request. Please try again.')    
  })

    it('Should display URL error page with a 404 level error', () => {
      cy.visit('http://localhost:5173/nonsense')
        .get('.url-error')
        .contains('h2', 'Oops! This page does not exist. Please return home.')
        .get('.url-error-img[alt="dog holding popcorn"]')

        .get('.return-all-movies')
        .click()

      cy.url().should('eq', 'http://localhost:5173/')
      })

  it('Should display placeholder image if movie does not have poster', () => {
    stubBrokenMoviePoster(200, blackAdamBrokenFile)
    
    cy.get('.all-movies-container')
      .get('.movie-card').first().find('.movie-poster[alt="Image not found."]')
  })
      
})



