import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signIn = async () => {
  try {
    // The actual pop up! returns the signed user and Google's credentials
    const result = await signInWithPopup(auth, provider);
    // get Google's access token
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // sign-in identity yay
    const user = result.user;
    // technically its better to send a firebase id token, not a raw google access token
    return { token, user };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const code = err.code;
    const message = err.message;
    const email = err.customData.email;

    console.log(
      `An error ${code} occurred when logging user with email: ${email} with message: ${message}`,
    );
    return null;
  }
};

export const signOut = async () => {
  await auth.signOut();
};
