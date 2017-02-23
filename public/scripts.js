$(document).ready(function() {
	fetchThings();
});

function fetchThings() {
  axios.get('/api/things')
  .then(function (response) {
    appendDOM(res.data);
    })
    .catch(function(error) {
      console.log('Error receiving things');
    })
}


function appendDOM(things) {
  things.map(function(thing) {
    $('.thing-container').append(`
      <h1>${thing.title}</h1>
    `);
  });
}
