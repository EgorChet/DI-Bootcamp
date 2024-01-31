import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle", // 'idle' | 'loading' |'succeeded' | 'failed'
  error: null,
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

// Async thunk for adding a new post
export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const response = await axios.post(POST_URL, post);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post) => {
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = loadedPosts;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const newPost = {
          ...action.payload,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        };
        state.posts.unshift(newPost);
      });
  },
});

// Export actions if any
export const { addReaction } = postsSlice.actions;

export default postsSlice.reducer;

// import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   posts: [],
//   status: "idle", // 'loading', 'succeeded', 'failed
//   author: -1,
// };

// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get(POST_URL);
//   return response.data;
// });

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     addPost: {
//       reducer(state, action) {
//         state.posts.unshift(action.payload);
//       },
//       prepare(title, body) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             body,
//             reactions: {
//               thumbsUp: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0,
//             },
//           },
//         };
//       },
//     },
//     addReaction: (state, action) => {
//       const { id, name } = action.payload;
//       const post = state.posts.find((post) => post.id === id);
//       if (post) {
//         post.reactions[name]++;
//       }
//     },
//     filterAuthor: (state, action) => {
//       state.author = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchPosts.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         const loadedPosts = action.payload.map((post) => {
//           post.reactions = {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0,
//           };
//           return post;
//         });
//         state.posts = loadedPosts;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = "failed";
//       });
//   },
// });

// export const { addReaction, addPost, filterAuthor } = postsSlice.actions;
// export default postsSlice.reducer;
