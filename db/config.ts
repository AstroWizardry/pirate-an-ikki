import { defineDb, defineTable, column, NOW } from 'astro:db';

// https://astro.build/db/config

const Work = defineTable({
  columns: {
    id: column.number({ pirmaryKey: true }),
    name: column.text(),
    author: column.text(),
    tags: column.text(),
    parody: column.text({ default: "orginal" }),
    characters: column.text(),
    publicationType: column.text({ enum: ['manga', 'doujinshi']}),
    isNsfw: column.boolean(),
    pages: column.text(),
    pageCount: column.number(),
    fileSize:column.number(),
    uploader: column.text(),
    isVisible: column.boolean(),
    createAt: column.date({ default: NOW }),
    updatedAt: column.date(),
    
  },
  indexes: [
    { on: [ "name", "tags" ], unique: true },
  ]
})

export default defineDb({
  tables: {
    Work,
  }
});
