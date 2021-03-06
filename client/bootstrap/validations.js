export function validateAddUser(data, props) {
  const errors = {};
  if(!data.name) {
    errors.name = 'Required';
  }
  if(!data.email) {
    errors.email = 'Required';
  }
  if(!data.password) {
    errors.password = 'Required';
  }
  if(!data.repeat) {
    errors.repeat = 'Required';
  }
  if(data.password !== data.repeat) {
    errors.repeat = 'Confirm Password must match Password';
  }
  return errors;
}