import styled from 'styled-components'
import {
  Button,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  InputAdornment,
  InputBase,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import { format } from 'date-fns'

import { useForm, Controller } from 'react-hook-form'

import backgroundImage from './assets/background.jpg'
import { ReactComponent as Logo } from './assets/logo.svg'

import GenderOption from './components/GenderOption/GenderOption';

function App() {
  const { handleSubmit, control } = useForm()

  const get18YearsAgo = () => {
    const today = format(new Date(), 'yyyy/MM/dd')
    return new Date(
      `${today.split('/')[0] - 18}-${today.split('/')[1]}-${
        today.split('/')[2]
      }`,
    )
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Page>
      <Banner />
      <Main>
        <Header>
          <Logo />
          <StyledButton variant="outlined" color="primary">
            How it works
          </StyledButton>
        </Header>

        <Content>
          <Title>Welcome</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="firstName-input">
                        First name
                      </CustomLabel>
                      <CustomInput
                        id="firstName-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'First name is required',
                    pattern: {
                      value: /^[a-zA-Z'.-]*$/,
                      message: 'Please use valid characters',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="lastName-input">
                        Last name
                      </CustomLabel>
                      <CustomInput
                        id="lastName-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'Last name is required',
                    pattern: {
                      value: /^[a-zA-Z'.-]*$/,
                      message: 'Please use valid characters',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="email-input">
                        Email address
                      </CustomLabel>
                      <CustomInput
                        id="email-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'Email address is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="street-input">
                        Street address
                      </CustomLabel>
                      <CustomInput
                        id="street-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'Street address is required',
                    pattern: {
                      value: /^[a-zA-Z0-9' '.-]*$/,
                      message: 'Please use valid characters',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="city-input">City</CustomLabel>
                      <CustomInput
                        id="city-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'City is required',
                    pattern: {
                      value: /^[a-zA-Z' ']*$/,
                      message: 'Please use valid characters',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <SelectContainer data-invalid={!!error}>
                      <FormControl fullWidth error={!!error} variant="standard">
                        <CustomLabel>State / Province</CustomLabel>
                        <Select
                          value={value}
                          onChange={onChange}
                          error={!!error}
                          input={<CustomInput />}
                        >
                          <MenuItem value="newYork">New York</MenuItem>
                        </Select>
                        <FormHelperText variant="standard">
                          {error ? error.message : null}
                        </FormHelperText>
                      </FormControl>
                    </SelectContainer>
                  )}
                  rules={{
                    required: 'State / Province is required',
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="zip"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="zip-input">
                        ZIP / Postal
                      </CustomLabel>
                      <CustomInput
                        id="zip-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type="number"
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{
                    required: 'ZIP / Postal is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please use valid characters',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl fullWidth error={!!error}>
                      <CustomLabel htmlFor="phone-input">
                        Phone number
                      </CustomLabel>
                      <CustomInput
                        id="phone-input"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        type="number"
                        startAdornment={
                          <CustomInputAdornment position="start">
                            +1
                          </CustomInputAdornment>
                        }
                      />
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{ required: 'Phone number is required' }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="birthday"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date of birth"
                        value={value}
                        onChange={onChange}
                        maxDate={get18YearsAgo()}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                          <FormControl fullWidth error={!!error}>
                            <CustomLabel htmlFor="date-input">
                              Date of Birth
                            </CustomLabel>
                            <DatePickerContainer data-invalid={!!error}>
                              <CustomInput
                                id="date-input"
                                fullWidth
                                ref={inputRef}
                                {...inputProps}
                                error={!!error}
                              />
                              {InputProps?.endAdornment}
                            </DatePickerContainer>
                            <FormHelperText variant="standard">
                              {error ? error.message : null}
                            </FormHelperText>
                          </FormControl>
                        )}
                      />
                    </LocalizationProvider>
                  )}
                  rules={{
                    required: 'Date of birth is required',
                    validate: (val) => {
                      if (val <= get18YearsAgo()) {
                        return true
                      }

                      return 'You must be at least 18 years old'
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="gender"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl
                      component="fieldset"
                      variant="standard"
                      style={{ marginTop: '5px' }}
                      error={!!error}
                    >
                      <CustomLabel component="legend">Gender</CustomLabel>
                      <GenderContainer>
                        <GenderOption
                          value={value}
                          onChange={onChange}
                          name="male"
                          label="Male"
                        />
                        <GenderOption
                          value={value}
                          onChange={onChange}
                          name="female"
                          label="Female"
                        />
                        <GenderOption
                          value={value}
                          onChange={onChange}
                          name="other"
                          label="Other"
                        />
                      </GenderContainer>
                      <FormHelperText variant="standard">
                        {error ? error.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                  rules={{ required: 'Gender is required' }}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: '20px' }}>
                <StyledButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Get my free samples
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </Content>
      </Main>
    </Page>
  )
}

const StyledButton = styled(Button)({
  textTransform: 'unset',
})

const CustomLabel = styled(InputLabel)({
  fontSize: 16,
  transform: 'none',
  fontWeight: 500,
  color: '#2B3649',
  marginBottom: '7px',
  position: 'static',
  pointerEvents: 'all',
})

const CustomInputAdornment = styled(InputAdornment)({
  backgroundColor: '#F9FAFB',
  alignSelf: 'stretch',
  height: 'unset',
  maxHeight: 'unset',
  marginRight: 0,
  padding: '0 10px',
  borderRadius: '7px 0 0 7px',
  border: '1px solid #ced4da',
  borderRight: 'none',
})

const CustomInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 7,
    backgroundColor: '#FFF',
    border: '1px solid #ced4da',
    fontSize: 15,
    width: '100%',
    padding: '8px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input[aria-invalid=true]': {
    borderColor: '#d32f2f',
  },
  '& #phone-input': {
    borderRadius: '0 7px 7px 0',
  },
  '& #date-input': {
    border: 'none',
    lineHeight: 1,
  },
}))

const GenderContainer = styled.div`
  display: flex;
  margin-bottom: 2px;

  & > * + * {
    margin-left: 15px;
  }
`

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Banner = styled.div`
  width: 100%;
  background-color: grey;
  position: relative;

  &:after {
    content: ' ';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 50%;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

const Main = styled.section`
  width: 100%;
  padding: 20px 40px;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding-bottom: 100px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
`

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  border-radius: 7px;
  border: 1px solid #ced4da;

  &[data-invalid='true'] {
    border-color: #d32f2f;
  }
`

const SelectContainer = styled.div`
  &[data-invalid='true'] .MuiInputBase-input {
    border-color: #d32f2f;
  }
`

export default App
