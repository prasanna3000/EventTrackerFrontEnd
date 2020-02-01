export default function postReducer(
  state = {
    posts: []
  },
  action
) {
  switch (action.type) {
    case 'GET_EVENTS':
      return { ...state, posts: [...action.data] };
    case 'ADD_EVENT':
      return { posts: [...state.posts, ...action.data] };
    case 'DELETE_EVENT':
      const currentBook = [...state.posts];
      console.log(action.data);
      const index = currentBook.findIndex(function(post) {
        return post._id === action.data;
      });
      return {
        posts: [...currentBook.slice(0, index), ...currentBook.slice(index + 1)]
      };
    case 'UPDATE_EVENT':
      // console.log(action);
      const currentBookToUpdate = [...state.posts];
      const indexToUpdate = currentBookToUpdate.findIndex(function(post) {
        return post._id === action.data._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        event_date: action.data.event_date,
        event_time: action.data.event_time,
        description: action.data.description,
        attendies: action.data.attendies,
        editing: false
      };
      console.log(newBookToUpdate.editing);
      return {
        posts: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
    case 'EDIT_EVENT':
      const currentBookToEdit = [...state.posts];
      const indexToEdit = currentBookToEdit.findIndex(function(post) {
        return post._id === action.data._id;
      });
      const newBookToEdit = {
        ...currentBookToEdit[indexToEdit],
        editing: !action.data.editing
      };
      return {
        posts: [
          ...currentBookToEdit.slice(0, indexToEdit),
          newBookToEdit,
          ...currentBookToEdit.slice(indexToEdit + 1)
        ]
      };
    default:
      return state;
  }
}
