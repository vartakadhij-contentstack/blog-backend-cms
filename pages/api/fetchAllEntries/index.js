import Contentstack from "contentstack";
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT_NAME
);

const fetchData = (contentType) => {
  try {
    const Query = Stack.ContentType(contentType).Query();
    let entry = Query.toJSON().find();
    return entry;
  } catch (err) {
    console.log("Error", err);
  }
};

export default fetchData;
