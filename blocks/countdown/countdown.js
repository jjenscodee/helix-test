/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

export default function decorate(block) {
  document.querySelector('main').classList.add('appear');
  block.innerHTML = `<div id="container" class="flexy">
      <svg id="icon" class="flexy"xmlns="http://www.w3.org/2000/svg" class="icon icon-notfound"><use href="/icons.svg#not-found"></use></svg>
      <div id="heading" class="flexy">welcome to pages.adobe.com</div>
      <div id="description" class="flexy">we will redirect you to the home page<br></div>
    </div>`;

  const emojis = ['💯', '💥', '👌', '👏', '👾', '👽', '🤖', '🦾', '🕺'];
  const description = block.querySelector('#description');

  function countdown() {
    const fun = emojis[Math.floor(Math.random() * emojis.length)];

    description.innerHTML += fun;
    // console.log(description.textContent);
    if (description.innerHTML.split('<br>')[1].length < 20) {
      setTimeout(countdown, 300);
      return;
    }
    description.innerHTML = '<a href=\'/home\'>take me to a landing page</a>';
  }

  countdown();
}
