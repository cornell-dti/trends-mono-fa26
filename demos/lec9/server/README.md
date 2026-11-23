# Lecture 9 Server

If you don’t already have a Firebase project in your personal Google account, follow the [Lecture 7 Firebase setup guide](https://webdev.cornelldti.org/docs/lec7/#create-new-firebase-webapp-and-database) to create one and the [Lecture 8 Firebase Auth guide](https://webdev.cornelldti.org/docs/lec8/#firebase-auth) for Google sign-in. Then come back to this README.

Run Express locally first, then deploy it to Cloud Run. The [client README](../client/README.md) covers Vercel.

## Run locally

From `demos/lec9/server`

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:8080/api/](http://localhost:8080/api/). You should see `Hello world!` The server uses the Firestore project in `firebase.ts` and defaults to port 8080, so you can skip creating a local `.env` or a cloud project for this step.

## Set up Google Cloud

1. **Google Cloud SDK.** On macOS, run `brew install --cask gcloud-cli` if you use Homebrew. On Windows, run the [Google Cloud CLI installer](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe), then open a new PowerShell window. Run `gcloud --version` to check the install and `gcloud init` to sign in. [Official install guide](https://docs.cloud.google.com/sdk/docs/install-sdk)
2. **Project and billing.** In [Google Cloud Console](https://console.cloud.google.com/), create a project or reuse one you can deploy to. A project you created in Firebase Console already has the same Google Cloud project ID. Select the project, open **Billing**, and link a billing account.
3. **Project ID and APIs.** Replace `YOUR_PROJECT_ID` with the project ID from the console.

   ```bash
        gcloud config set project YOUR_PROJECT_ID

        gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
   ```

## Connect your own Firestore database

Do this before deploying so your copy of the planner has its own courses and semesters.

1. In Firebase Console, open your project and create the default **Firestore Database** if you haven’t already. For a dedicated project with disposable demo data, use **Test mode** so the demo can read and write. Test mode allows anyone to access the data.
2. In **Project settings → General → Your apps**, register a **Web app** or select the one you already registered. Copy its `firebaseConfig` object and replace the one in `demos/lec9/server/firebase.ts`.
3. Restart the local server. A new database starts empty. In the local planner, click **Populate Courses** with a roster and subject such as `SP25` and `CS`, wait for success, then refresh and check that the courses are available.

## Deploy to Cloud Run

Run the command for your OS from `demos/lec9/server`.

**macOS or Linux**

```bash
bash deploy.sh
```

**Windows PowerShell**

```powershell
gcloud run deploy lec9-server --source . --region us-central1 --allow-unauthenticated --min-instances=0 --cpu-throttling --project YOUR_PROJECT_ID
```

`gcloud` uploads the source, and Cloud Build uses `Dockerfile` to build the image. The first stage compiles TypeScript, and the second runs the compiled server. Cloud Run supplies `PORT`. You can do this deployment without Docker Desktop running locally.

When deployment finishes, copy the **Service URL**. Open that URL with `/api/` appended and check for `Hello world!` Then use the URL in the [client deployment steps](../client/README.md#deploy-to-vercel).
