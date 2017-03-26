module.exports = co;

function co (gen) {
  const g = gen();

  function next (data) {
    // g.next(data) do in sync code , when recursion it's will matters.
    const result = g.next(data);
    if (result.done) return result.value
    // add one cb.
    result.value.then(data => {
      next(data);
    })
  }

  next()
}