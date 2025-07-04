export const outputData = <T>(data: T) => {
  console.log(data);
};

outputData<boolean>(false);
outputData<string>("Maximiliano");
