const findUser = (data)  => {
  const userListData = { };
  data.map((item, index) => {
    userListData[item.ID] = item;
  });
  data.map((item, index) => {
    const parent = userListData[item.parentID];
    if(item.parentID !== undefined &&
      parent !== undefined &&
      userListData.hasOwnProperty(item.parentID)) {
      if(parent['children'] === undefined) {
        parent['children'] = [];
      }
      parent['children'].push(item);
    }
  });
  Object.keys(userListData).map((key, index) => {
    if(userListData[key].parentID) {
      delete userListData[key];
    }
  });
  return userListData;
}

export default findUser;
