export default defineEventHandler(() => {
  return {
    data: [
      {
        createdAt: '2023-10-28 19:08',
        expression: {
          'Thank you for Calling': '전화해주셔서 감사합니다',
          'Thank you for Waiting': '기다려주셔서 감사합니다',
          'Thank you for Your trouble': '애써 주셔서 감사합니다',
        },
        dialogue: {
          A: {
            'Thank you for joining us': '함께 해 주신 것을 환영합니다',
          },
          B: {
            'Thank you for inviting us': '초대해 주셔서 감사합니다',
          },
        },
        exercises: [
          {
            'Thank you for ____': '와 주셔서 감사합니다',
          },
          {
            'Thank you for ____': '모든 것에 감사합니다',
          },
        ],
      },
    ],
  }
})
