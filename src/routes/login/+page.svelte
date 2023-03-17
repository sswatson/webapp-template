<script>
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { auth } from '$lib/firebase';

  import { userStore } from 'sveltefire';
  const user = userStore(auth);

  // Set up Google auth provider
  const provider = new GoogleAuthProvider();

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, provider);
      // Handle successful login
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
</script>

<main>
  {#if $user}
    <h4>You are signed in as {$user.displayName}</h4>
    <button on:click={() => auth.signOut()}>Sign out</button>
  {:else}
    <h1>Login</h1>
    <button on:click={handleGoogleLogin} type="button">Sign in with Google</button>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
  }

  h1, h4 {
    margin-top: calc(0.25*(100vh - var(--nav-height)));
  }

  button {
    width: 400px;
    max-width: 80%;
  }
</style>
