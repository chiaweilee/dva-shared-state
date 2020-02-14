export const shared: any= {
  state: {},
};

const onStateChange = (state: any) => {
  shared.state = state;
};

export default {
  onStateChange
}
