import { atom } from "jotai";
import axios from "axios";

// Message Atoms
const messageArrayAtom = atom(
  async get => {
    const res = await axios.get("http://localhost:4090/message/all");
    console.log(res.data);
    return res.data;
  }
);

const subtopicArrayOrderedAtom = atom(async (get) => {
  const subtopicArray = await get(subtopicArrayAtom);
  return subtopicArray.sort((a, b) => new Date(b.timeAccessed) - new Date(a.timeAccessed));
});

const overwrittenSubtopicArrayAtom = atom(null)

export const subtopicArrayWriteableAtom = atom(
  (get) => get(overwrittenSubtopicArrayAtom) ?? get(subtopicArrayOrderedAtom),
  (get, set, newValue) => {
    const nextValue =
      typeof newValue === 'function' ? newValue(get(subtopicArrayWriteableAtom)) : newValue
      // console.log(nextValue);
      set(overwrittenSubtopicArrayAtom, nextValue)
  },
)

const overwrittenSubtopicFilteredAtom = atom(null)

export const subtopicFilteredWriteableAtom = atom(
  (get) => get(overwrittenSubtopicFilteredAtom) ?? get(subtopicArrayOrderedAtom),
  (get, set, newValue) => {
    const nextValue =
      typeof newValue === 'function' ? newValue(get(subtopicArrayWriteableAtom)) : newValue
      console.log(nextValue);
    set(overwrittenSubtopicFilteredAtom, nextValue)
  },
)


// Topic Atoms
export const topicArrayAtom = atom(
  
  async get => {
    const res = await axios.get("http://localhost:4090/api/topic/all");
    return res.data;
  }
);

// Overwritten topic array atom
const overwrittenTopicArrayAtom = atom(null);

// Writable topic array atom
export const topicArrayWriteableAtom = atom(
  // Getter
  get => {
    const overwrittenTopicArray = get(overwrittenTopicArrayAtom);
    return overwrittenTopicArray !== null ? overwrittenTopicArray : get(topicArrayAtom);
  },
  // Setter
  (get, set, newValue) => {
    set(overwrittenTopicArrayAtom, typeof newValue === 'function' ? newValue(get(topicArrayAtom)) : newValue);
  }
);


export const topicFilterAtom = atom(0)
export const isAddingNoteAtom = atom(false)
export const isAddingTopicAtom = atom(false) 
export const newNoteTopicAtom = atom(0)
