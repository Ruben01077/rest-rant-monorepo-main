
function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div >
        <img height="300" width="500" src="https://i.pinimg.com/originals/05/3d/63/053d63d0d218e860bf2198d6a41d7a29.jpg" alt="Chia Fruit Shake" />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
