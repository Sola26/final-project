<template>
  <div><h1>Hi;</h1></div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function(event) {
      // array with texts to type in typewriter
      var dataText = [
        "OBj =",
        "{ name: 'Sola', type: 'Human!', 'full-stack developer', 'UI UX designer'",
        "location: 'Berlin'",
        "properties: 'Javascript', 'HTML',",
        "'CSS'",
        " ... obviously! }"
      ];

      // type one text in the "typwriter"
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
          // add next character to h1
          document.querySelector("h1").innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == "function") {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function() {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });
  }
};
</script>

<style scoped>
body {
  height: 50%;
  font-family: "Courier";
}

h1 {
  font-size: 40px;
  margin-top: 15%;

  font-family: "Courier";
}

span {
  border-right: 0.05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>
