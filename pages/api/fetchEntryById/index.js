import Contentstack from "contentstack";
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT_NAME
);

const fetchSingleBlog = (contentType, entryId) => {
  try {
    const Query = Stack.ContentType(contentType).Entry(entryId);
    let entry = Query.fetch().then(
      function success(entry) {
        return entry.toJSON();
      },
      function error(err) {
        console.log("Error", err);
      }
    );
    return entry;
  } catch (err) {
    console.log("Error", err);
  }
};

export default fetchSingleBlog;
