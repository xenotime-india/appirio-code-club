import createHandler from "github-webhook-handler";
import createApp from "github-app";
import config from "config";
import PullRequest from "./../../model/pullrequest";
import path from 'path';

export default () => {
  console.log(config);
  const handler = createHandler({
    path: "/",
    secret: config.WEBHOOK_SECRET
  });

  const app = createApp({
    id: config.APP_ID,
    cert: config.PRIVATE_KEY
  });

  handler.on("error", err => {
    console.error("Error:", err);
  });

  handler.on("pull_request", event => {
    console.log("EVENT", event);
    switch (event.payload.action) {
      case "reopened":
        var installation = event.payload.installation.id;
        app
          .asInstallation(installation)
          .then(github => {
            github.issues.createComment({
              owner: event.payload.repository.owner.login,
              repo: event.payload.repository.name,
              number: event.payload.issue.number,
              body: "Hi from sandeep kumar (Xenotime)."
            });
          })
          .catch(ex => {
            console.error(ex);
          });
        break;
      case "labeled":
        const pullRequest = new PullRequest(event.payload);
        pullRequest.save((err, pullRequest) => {
          if (err) return next(err);
          console.log(pullRequest);
        });

        var installation = event.payload.installation.id;
        app
          .asInstallation(installation)
          .then(github => {
            github.issues.createComment({
              owner: event.payload.repository.owner.login,
              repo: event.payload.repository.name,
              number: event.payload.issue.number,
              body: `Updated Label to ${event.payload.label.name}`
            });
          })
          .catch(ex => {
            console.error(ex);
          });
        break;
    }
    if (event.payload.action === "opened") {
    }
  });

  return (req, res) => {
    handler(req, res, err => {
      res.statusCode = 404;
      res.end("no such location");
    });
  };
};
