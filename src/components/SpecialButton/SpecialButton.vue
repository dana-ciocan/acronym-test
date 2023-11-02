<template>
  <button><slot /></button>
</template>

<style>
button {
  background-color: purple;
  border: none;
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
  width: 15rem;
}

@media screen and (min-width: 1200px) {
  button {
    font-size: 1rem;
  }
}
</style>
