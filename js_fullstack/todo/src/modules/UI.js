import PubSub from '../helper/pubsub';
const dummyFn = () => {
  const handleSub = (data) => {
    console.log('Hello from UI', data);
  };

  PubSub.subscribe('test', handleSub);
};

export default dummyFn;