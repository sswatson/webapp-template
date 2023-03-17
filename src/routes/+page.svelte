
<main>
  <h1>
    Example home page
  </h1>
</main>

<style lang="scss">

  main {
    @include flex-center;
    padding: 1rem;
  }

  h1 {
    margin-top: calc(0.25*(100vh - var(--nav-height)));
  }
</style>