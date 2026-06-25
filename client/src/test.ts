const response = {
  _id: {
    $oid: "67420cf6b4f0ac060b6c2f57",
  },
  createdAt: {
    $date: "2024-11-23T17:12:22.079Z",
  },
  userId: "virenderdhillon104@gmail.com",
  quizId: "6741cb5f91eff5019c055731",
  quizResponse: [
    {
      queId: "6741ce6b3ec0c01eb799abdb",
      correct: [1732365914299],
      notsure: 0,
      _id: {
        $oid: "67420d3ab4f0ac060b6c2fb5",
      },
    },
    {
      queId: "6741d6efb4f0ac060b6c26b5",
      correct: ["2"],
      notsure: 0,
      _id: {
        $oid: "67420d3ab4f0ac060b6c2fb6",
      },
    },
    {
      queId: "6742078fb4f0ac060b6c2d2f",
      correct: [
        {
          id: 1732379028633,
          text: "True",
        },
        {
          id: 1732380417226,
          text: "True",
        },
        {
          id: 1732380421597,
          text: "False",
        },
      ],
      notsure: 0,
      _id: {
        $oid: "67420d3ab4f0ac060b6c2fb7",
      },
    },
    {
      queId: "6742078fb4f0ac060b6c2d33",
      correct: [
        {
          id: 1732380527075,
          match: "2",
        },
        {
          id: 1732380532409,
          match: "3",
        },
        {
          id: 1732379028633,
          match: "1",
        },
      ],
      notsure: 0,
      _id: {
        $oid: "67420d3ab4f0ac060b6c2fb8",
      },
    },
  ],
  endedAt: {
    $date: "2024-11-23T17:12:22.082Z",
  },
  __v: 0,
  submitted: true,
};

const quiz = {
  questions: [
    {
      type: 1,
      que: "This is the question",
      choices: [
        {
          id: 1732365898906,
          text: "not correct",
          _id: {
            $oid: "6741ce6b3ec0c01eb799abdc",
          },
        },
        {
          id: 1732365917667,
          text: "not correct",
          _id: {
            $oid: "6741ce6b3ec0c01eb799abde",
          },
        },
        {
          id: 1732365914299,
          text: "correct",
          _id: {
            $oid: "6741ce6b3ec0c01eb799abdd",
          },
        },
        {
          id: 1732365921950,
          text: "not correct",
          _id: {
            $oid: "6741ce6b3ec0c01eb799abdf",
          },
        },
      ],
      Blanks: [],
      correct: [1732365914299],
      matchFields: [],
      points: 0,
      randomizedOptions: 0,
      _id: {
        $oid: "6741ce6b3ec0c01eb799abdb",
      },
    },
    {
      type: 3,
      que: "Its answer is true",
      choices: [],
      Blanks: [],
      correct: [],
      OneCorrect: "1",
      matchFields: [],
      points: 0,
      randomizedOptions: 1,
      _id: {
        $oid: "6741d6efb4f0ac060b6c26b5",
      },
    },
    {
      type: 2,
      que: "iweoilwen[Blank][Blank][Blank]",
      choices: [],
      Blanks: [
        {
          id: 1732379028633,
          text: "True",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d30",
          },
        },
        {
          id: 1732380417226,
          text: "True",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d31",
          },
        },
        {
          id: 1732380421597,
          text: "True",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d32",
          },
        },
      ],
      correct: [null],
      matchFields: [],
      points: 1,
      randomizedOptions: 1,
      _id: {
        $oid: "6742078fb4f0ac060b6c2d2f",
      },
    },
    {
      type: 4,
      que: "This is a matching question",
      choices: [],
      Blanks: [],
      correct: [],
      matchFields: [
        {
          id: 1732379028633,
          field: "1",
          match: "1",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d34",
          },
        },
        {
          id: 1732380527075,
          field: "2",
          match: "2",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d35",
          },
        },
        {
          id: 1732380532409,
          field: "3",
          match: "3",
          _id: {
            $oid: "6742078fb4f0ac060b6c2d36",
          },
        },
      ],
      points: 3,
      randomizedOptions: 1,
      _id: {
        $oid: "6742078fb4f0ac060b6c2d33",
      },
    },
  ],
  __v: 0,
};

//   "_id": {
//     "$oid": "6741cb5f91eff5019c055731"
//   },
//   "quizThumbnail": "1732365151316-Screenshot 2024-03-08 150319.png",
//   "title": "Test 1 for the response test",
//   "desc": "This is the description of this quiz",
//   "timeLimit": 7200,
//   "category": [
//     "lefkbbf",
//     "fn3jkeb",
//     "wlkfwe",
//     "welknk",
//     "wlkenf",
//     "welnfwkl",
//     "welknfw",
//     "welkfnlw",
//     "weklkflwnle"
//   ],
//   "published": 1,
//   "created_at": {
//     "$date": "2024-11-23T12:32:31.412Z"
//   },
//   "workspace": "672cee7332a0728e82c66f6b",
//   "creator": "virenderdhillon104@gmail.com",
//   "startTime": {
//     "$date": "2024-11-23T12:33:00.000Z"
//   },
//   "lineantTime": 20000,
