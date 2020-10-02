<template>
  <div class="flex flex-wrap py-4 px-3">
    <div class="w-full md:w-2/3">
      <div class="mb-8">
        <input type="text" class="w-full bg-gray-100 px-4 py-3 font-bold text-3xl" placeholder="Titre de l'article" />
      </div>
        <div class="editor">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar">

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <icon name="bold" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <icon name="italic" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
              >
                <icon name="strike" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
              >
                <icon name="underline" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
              >
                <icon name="code" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <icon name="paragraph" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
                H1
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                H2
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                H3
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <icon name="ul" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
              >
                <icon name="ol" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <icon name="quote" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
              >
                <icon name="code" />
              </button>

              <button
                class="menubar__button"
                @click="commands.horizontal_rule"
              >
                <icon name="hr" />
              </button>

              <button
                class="menubar__button"
                @click="commands.undo"
              >
                <icon name="undo" />
              </button>

              <button
                class="menubar__button"
                @click="commands.redo"
              >
                <icon name="redo" />
              </button>

            </div>
          </editor-menu-bar>

          <editor-content class="editor__content" :editor="editor" />
        </div>
    </div>

    <div class="w-full md:w-1/3 pl-3">
      <!-- Post's type -->
      <div class="mb-5">
        <p class="font-bold mb-3">Type</p>
        <div>
          <select id="type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option v-for="type in articleTypes" :key="type.id" :value="type.name">{{ type.name }}</option>
          </select>
        </div>
      </div>

      <!-- Extract -->
      <div class="mb-5">
        <p class="font-bold mb-3">Extrait</p>
        <textarea rows="6" class="bg-gray-200 border border-gray-200 p-2 border-2 rounded w-full"></textarea>
      </div>

      <!-- Cover -->
      <div class="mb-5">
        <p class="font-bold mb-2">Couverture</p>
        <div class="bg-gray-200 border border-gray-200 p-2 border w-full rounded">
          <label for="photo">
            <img src="/cloud-computing.svg" alt="" class="object-cover h-24 m-auto" />
          </label>
          <input type="file" accept="image/*" id="photo" style="display: none;" />
        </div>
      </div>

      <!-- Managment -->
      <div>
        <button class="py-2 w-full block rounded border-black border-2 my-2 font-semibold">Enregistrer comme brouillon</button>
        <button class="py-2 w-full block rounded border-red-700 border-2 my-2 bg-red-700 text-white font-semibold">Publier</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Editor, EditorContent, EditorMenuBar } from "tiptap";
  import {
    Blockquote,
    BulletList,
    CodeBlock,
    HardBreak,
    Heading,
    ListItem,
    OrderedList,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History } from "tiptap-extensions";
  export default {
    name: "new-article-form",
    components: {EditorContent, EditorMenuBar},
    data: () => ({
      editor: new Editor({
        content: `
          <h2>
            Bonjour,
          </h2>
          <p>
            ceci est un <em>exemple</em> d'article.
          </p>
          <ul>
            <li>
              Une liste
            </li>
            <li>
              Avec des éléments
            </li>
          </ul>
          <blockquote>
            Juste fantastique 👏
            <br />
            – mom
          </blockquote>
        `,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ]
      })
    }),
    beforeDestroy: function() {
      this.editor.destroy();
    },
    computed: {
      articleTypes: () => [
        {id: 1, name: "BLOG"},
        {id: 2, name: "REVUE"},
        {id: 3, name: "PAGE"},
        {id: 4, name: "DOMAIN"},
        {id: 5, name: "ACTU"},
        {id: 6, name: "PRESS"},
        {id: 7, name: "FOREIGN"}
      ]
    }
  }
</script>
