<script>
	import '../app.scss';
	import Icon from 'svelte-icon/Icon.svelte';
	import person from '@material-design-icons/svg/filled/person.svg?raw';
</script>

<div class="page-container">
	<nav>
		<div>
			<a class="font-mono" href="/">my app</a>
		</div>
		<ul>
			<li>
				<a href="/login">
					<Icon size={'24'} data={person} stroke="white" fill="white" />
				</a>
			</li>
		</ul>
	</nav>

	<slot />
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding: 0;
		margin: 0;
	}

	nav {
		background: var(--primary);
		color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: var(--nav-height);
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0 10px;
	}

	div {
		margin: 0 20px;
	}

	li a {
		width: 40px;
		height: 40px;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
