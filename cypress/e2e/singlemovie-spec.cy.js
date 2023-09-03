describe('Single movie details view', () => {
  let blackAdamId = 436270
  let blackAdamFile = 'blackAdam.json'

  let theWomanKingId = 724495
  let theWomanKingFile = 'womanKing.json'

  const stubSingleMovieFetch = (id, code, fixtureFile) => {
    cy.intercept(
      'GET',
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`,
      {
        statusCode: code,
        fixture: fixtureFile
      }
    )
  }

beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'allMovies.json'
      }
    )
    cy.visit('http://localhost:5173/')
  })

  it("Should select a movie and see a page with that movie's details", () => {
    stubSingleMovieFetch(blackAdamId, 200, blackAdamFile)

    cy.get('.all-movies-container')
      .contains('.movie-card', 'Black Adam')
      .click()
      .url()
      .should('eq', 'http://localhost:5173/movie/436270')
      .get('.single-movie-title')
      .should('contain', 'Black Adam')
      .get('.single-movie-rating')
      .should('contain', 'Tomatillos')
      .get('.single-movie-data')
      .should('contain', 'Overview')
      .get('.single-movie-meta-data')
      .contains('Budget: $200,000,000')
      .get('.single-movie-meta-data')
      .contains('Revenue: $384,571,691')
  })

  it("Should select a different movie and see a page with that movie's details", () => {
    stubSingleMovieFetch(theWomanKingId, 200, theWomanKingFile)

    cy.get('.all-movies-container')
      .contains('.movie-card', 'The Woman King')
      .click()
      .url()
      .should('eq', 'http://localhost:5173/movie/724495')
      .get('.single-movie-title')
      .should('contain', 'The Woman King')
      .get('.single-movie-rating')
      .should('contain', 'Tomatillos')
      .get('.single-movie-data')
      .should('contain', 'Overview')
      .get('.single-movie-meta-data')
      .contains('Data not reported')
      .get('.single-movie-meta-data')
      .contains('Data not reported')
  })

  it('Should be able select movie and then return to all movies page', () => {
    stubSingleMovieFetch(theWomanKingId, 200, theWomanKingFile)

    cy.get('.movie-card').contains('The Woman King').click()

    cy.url()
      .should('eq', 'http://localhost:5173/movie/724495')
      .get('.return-all-movies')
      .click()

    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('Should display error message with a 500 level error', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500
      }
    )
      .get('.error-msg')
      .contains(
        'p',
        'There seems to be a problem with your request. Please try again.'
      )
  })
})
