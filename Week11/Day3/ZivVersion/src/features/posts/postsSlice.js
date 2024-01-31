import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle", // 'loading', 'succeeded', 'failed
  author: -1,
};

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addpost: {
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addreaction: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
    filterAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
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
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { addreaction, addpost, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer;
