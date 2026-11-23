# Lecture 9 Client

## Run locally

Start the Express server using the **Run locally** section of the [server README](../server/README.md). In another terminal, run these commands from `demos/lec9/client`.

```bash
pnpm install
pnpm run dev
```

With both the client and server running, open [http://localhost:5173/](http://localhost:5173/) in your browser. The client automatically sends API requests to the Express server on port `8080`, so local testing needs no client `.env` file.

## Deploy to Vercel

First, follow **Deploy to Cloud Run** in the [server README](../server/README.md). Copy the **Service URL** after the server deploys.

1. Open [Vercel Drop](https://vercel.com/drop) and upload a clean copy of the Lecture 9 `client` folder.
2. Choose your Vercel account or team, name the project, and click **Deploy**. Vercel creates the project and builds the client.
3. Open the new project's **Settings → Environment Variables**. Add `VITE_API_BASE_URL` for **Production**, with the Cloud Run **Service URL plus** `/api`, for example `https://YOUR_SERVICE.run.app/api`.
4. Under **Deployments**, open the latest deployment's menu and click **Redeploy** so Vite picks up the setting. Open the Vercel URL and check that courses load. In the browser's **Network** tab, `/api/courses` should go to your Cloud Run hostname.

## Google sign-in on Vercel

You can load courses without signing in. To enable sign-in on your own deployment, use a Firebase project you control and do step 1 before uploading the client folder.

1. In Firebase **Project settings → General → Your apps**, select your registered web app and copy its `firebaseConfig` into `client/src/firebase.ts`. Under **Authentication → Sign-in method**, enable **Google**.
2. After deploying, copy your Vercel hostname. In the same Firebase project, go to **Authentication → Settings → Authorized domains → Add domain**. Enter only the hostname, such as `your-demo.vercel.app`, without `https://` or a trailing slash. Refresh the Vercel page and try signing in. This Firebase change takes effect without a redeploy.
