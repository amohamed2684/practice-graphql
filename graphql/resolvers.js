import { db } from '../data/db.js';

export const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.gameId === parent.id )
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.authorId === parent.id )
    }
  },
  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.gameId )
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.authorId )
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id)

      return db.games
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: `g${db.games.length}`
      }

      db.games.push(game)

      return game
    },
    updateGame(_, args) {
      db.games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edit}
        }

        return game
      })

      return db.games.find((game) => game.id === args.id)
    }
  }
}