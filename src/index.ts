import { Application } from 'probot'

export = (app: Application) => {
  // Your code here
  app.log('Yay, the app was loaded!!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  // app.on('issues.opened', async context => {
  //   // A new issue was opened, what should we do with it?
  //   context.log(context.payload)
  // })

  app.on('issues.opened', async (context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({body: 'Hello World!'})

    // Post a comment on the issue
    context.github.issues.createComment(params)
  })

  app.on('*', async context => {
    // A new issue was opened, what should we do with it?
    context.log(context.payload)
  })
}
