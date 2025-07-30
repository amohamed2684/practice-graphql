export const db = {
  reviews: [
    {
      id: "r1",
      rating: 5,
      content: "An absolute masterpiece! Highly recommended.",
      gameId: "g1",
      authorId: "a1"
    },
    {
      id: "r2",
      rating: 3,
      content: "Good, but could use some improvements in gameplay.",
      gameId: "g2",
      authorId: "a2"
    },
    {
      id: "r3",
      rating: 4,
      content: "Great experience overall with minor bugs.",
      gameId: "g3",
      authorId: "a3"
    },
    {
      id: "r4",
      rating: 2,
      content: "The story was lacking and the graphics were outdated.",
      gameId: "g4",
      authorId: "a4"
    },
    {
      id: "r5",
      rating: 5,
      content: "Best multiplayer experience I've ever had!",
      gameId: "g5",
      authorId: "a5"
    },
    {
      id: "r6",
      rating: 1,
      content: "Unplayable due to constant crashes.",
      gameId: "g6",
      authorId: "a6"
    },
    {
      id: "r7",
      rating: 4,
      content: "Solid mechanics and beautiful world-building.",
      gameId: "g7",
      authorId: "a1"
    },
    {
      id: "r8",
      rating: 3,
      content: "Average at best, but worth trying if on sale.",
      gameId: "1",
      authorId: "a2"
    }
  ],
  games: [
    {
      id: "g1",
      title: "Legends of Valor",
      platform: ["PC", "Xbox One", "PS5"],
      reviewIds: ["r1", "r8"]
    },
    {
      id: "g2",
      title: "Mystic Quest",
      platform: ["Nintendo Switch", "PC"],
      reviewIds: ["r2"]
    },
    {
      id: "g3",
      title: "Skyline Racers",
      platform: ["Mobile", "PC"],
      reviewIds: ["r3"]
    },
    {
      id: "g4",
      title: "Dungeon Raiders",
      platform: ["PS5", "PC"],
      reviewIds: ["r4"]
    },
    {
      id: "g5",
      title: "Starborne",
      platform: ["Xbox Series X", "PC"],
      reviewIds: ["r5"]
    },
    {
      id: "g6",
      title: "Cyber Drift",
      platform: ["Mobile"],
      reviewIds: ["r6"]
    },
    {
      id: "g7",
      title: "Frostbite Kingdom",
      platform: ["Nintendo Switch", "PC"],
      reviewIds: ["r7"]
    }
  ],
  authors: [
    {
      id: "a1",
      name: "Jane Doe",
      verified: true,
      reviewIds: ["r1", "r7"]
    },
    {
      id: "a2",
      name: "John Smith",
      verified: false,
      reviewIds: ["r2", "r8"]
    },
    {
      id: "a3",
      name: "Alex Johnson",
      verified: true,
      reviewIds: ["r3"]
    },
    {
      id: "a4",
      name: "Sam Carter",
      verified: false,
      reviewIds: ["r4"]
    },
    {
      id: "a5",
      name: "Morgan Lee",
      verified: true,
      reviewIds: ["r5"]
    },
    {
      id: "a6",
      name: "Chris Evans",
      verified: false,
      reviewIds: ["r6"]
    }
  ]
};