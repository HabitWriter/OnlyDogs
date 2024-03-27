import { atom } from "jotai";
import axios from "axios";

// Message Atoms
export const messageArrayAtom = atom(
  async get => {
    const res = await axios.get("http://localhost:4090/api/message/all");
    console.log(res.data);
    return res.data;
  }
);

const messageArrayOrderedAtom = atom(async (get) => {
  const subtopicArray = await get(messageArrayAtom);
  return subtopicArray.sort((a, b) => new Date(b.timeAccessed) - new Date(a.timeAccessed));
});

const overwrittenMessageArrayAtom = atom(null)

export const messageArrayWriteableAtom = atom(
  (get) => get(overwrittenMessageArrayAtom) ?? get(messageArrayOrderedAtom),
  (get, set, newValue) => {
    const nextValue =
      typeof newValue === 'function' ? newValue(get(messageArrayWriteableAtom)) : newValue
      // console.log(nextValue);
      set(overwrittenMessageArrayAtom, nextValue)
  },
)

// Post Atoms
const postArrayAtom = atom(
  async get => {
    const res = await axios.get("http://localhost:4090/api/post/all");
    // console.log(res.data);
    return res.data;
  }
);

const postArrayOrderedAtom = atom(async (get) => {
  const postArray = await get(postArrayAtom);
  return postArray.sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated));
});

const overwrittenPostArrayAtom = atom(null)

export const postArrayWriteableAtom = atom(
  (get) => get(overwrittenPostArrayAtom) ?? get(postArrayOrderedAtom),
  (get, set, newValue) => {
    const nextValue =
      typeof newValue === 'function' ? newValue(get(postArrayWriteableAtom)) : newValue
      // console.log(nextValue);
      set(overwrittenPostArrayAtom, nextValue)
  },
);

// User Atoms

const userArrayAtom = atom(
  async get => {
    try {
      const res = await axios.get("http://localhost:4090/api/user/all");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return { error: error.response.status };
    }
  }
);



// const userArrayAtom = atom(
//   async get => {
//     const res = await axios.get("http://localhost:4090/api/user/all");
//     if (res.error) return res.error
//     console.log(res.data);
//     return res.data;
//   }
// );

const userArrayOrderedAtom = atom(async (get) => {
  const userArray = await get(userArrayAtom);
  return userArray.sort((a, b) => new Date(b.timeAccessed) - new Date(a.timeAccessed));
});

const overwrittenUserArrayAtom = atom(null)

export const userArrayWriteableAtom = atom(
  (get) => get(overwrittenUserArrayAtom) ?? get(userArrayOrderedAtom),
  (get, set, newValue) => {
    const nextValue =
      typeof newValue === 'function' ? newValue(get(userArrayWriteableAtom)) : newValue
      // console.log(nextValue);
      set(overwrittenUserArrayAtom, nextValue)
  },
);


export const CurrentUserAtom = atom(
  async get => {
    const res = await axios.get("http://localhost:4090/user/current");
    // const res = 3
    // console.log(res.data);
    return res.data;
  }
);

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
