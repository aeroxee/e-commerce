async function GetBlog() {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/blog`, {
      cache: "no-cache",
    });
    const d = await response.json();

    return d;
  } catch (error) {
    console.dir(error);
  }
}

export { GetBlog };
