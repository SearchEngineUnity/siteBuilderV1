/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import QueryContainer from 'part:@sanity/base/query-container';
import {
  TextField,
  Select,
  Radio,
  FormControl,
  FormGroup,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Box,
  Typography,
} from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { determineColor } from '../lib/helperFunctions';

const FormDesignPreview = ({ document }) => {
  // The JSON preview
  const documentQuery = `*[_type == 'formStyle' && name == '${document.displayed.name}'] | order(_updatedAt desc) {'fieldBgColor': backgroundColor->color, 'fieldBorderRadius': borderRadius, 'btnStyle': btnStyle->{'main': colors.main->color, 'dark': colors.dark->color, 'contrastText': colors.contrastText->color, settings, typography}, 'fieldBgHoverColor': fieldBgHoverColor->color, 'variant': fieldVariant, 'focusedColor': focusedColor->color, 'inputColor': inputColor->color, 'labelColor': labelColor->color, name, 'selectorColor': selectorColor->color}`;

  return (
    <QueryContainer query={documentQuery}>
      {({ result, loading }) => {
        let fieldBgColor;
        let fieldBgHoverColor;
        let focusedColor;
        let fieldBorderRadius;
        let btnStyle;
        let variant;
        let labelColor;
        let inputColor;
        let selectorColor;

        if (result) {
          fieldBgColor = determineColor(result?.documents[0]?.fieldBgColor);
          fieldBgHoverColor = determineColor(result?.documents[0]?.fieldBgHoverColor);
          focusedColor = determineColor(result?.documents[0]?.focusedColor);
          fieldBorderRadius = result?.documents[0]?.fieldBorderRadius;
          variant = result?.documents[0]?.variant || 'outlined';
          labelColor = determineColor(result?.documents[0]?.labelColor);
          inputColor = determineColor(result?.documents[0]?.inputColor);
          selectorColor = determineColor(result?.documents[0]?.selectorColor);
        }

        const theme = createTheme({
          palette: {
            primary: {
              main: focusedColor || '#3f51b5', // mui-focused class color (applies to border and checkbox, select, radio label color)
            },
            secondary: {
              main: selectorColor || '#f50057', // selector color (checkbox icon and radio icon)
            },
            text: {
              primary: inputColor || 'rgba(0, 0, 0, 0.87)', // controls input text and placeholder text and hover border color
              secondary: labelColor || 'rgba(0, 0, 0, 0.54)', // control label text, helper text, and the border of checkbox and radio icons
            },
          },
          overrides: {
            MuiOutlinedInput: {
              root: {
                borderRadius: fieldBorderRadius || '4px', // border radius change for outlined variant
                backgroundColor: fieldBgColor || '#fff', // background color change for outlined variant
              },
            },
            MuiFilledInput: {
              root: {
                backgroundColor: fieldBgColor || 'rgba(0, 0, 0, 0.09)', // background color for filled variant
                '&:hover': {
                  backgroundColor: fieldBgHoverColor || 'rgba(0, 0, 0, 0.13)', // background color on hover for filled variant
                },
                '@media (hover: none)': {
                  backgroundColor: fieldBgColor || 'rgba(0, 0, 0, 0.09)', // background color for filled variant when media has no hover
                  '&:hover': {
                    backgroundColor: fieldBgColor || 'rgba(0, 0, 0, 0.09)', // background color on hover for filled variant when media has no hover
                  },
                },
                '&.Mui-focused': {
                  backgroundColor: fieldBgColor || 'rgba(0, 0, 0, 0.09)', // background color when clicked into the field
                },
              },
            },
            MuiFormControlLabel: {
              root: {
                color: labelColor || 'rgba(0, 0, 0, 0.54)',
              },
            },
          },
        });

        return loading ? (
          <div> data loading </div>
        ) : (
          result && (
            <>
              <ThemeProvider theme={theme}>
                <Box p={6} bgcolor="background.paper">
                  <Box color={labelColor || 'rgba(0, 0, 0, 0.54)'}>
                    <Typography component="p" variant="h3" paragraph>
                      {document.displayed.name}
                    </Typography>
                  </Box>
                  <form method="POST" noValidate autoComplete="off">
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">Name</FormLabel>
                      <TextField
                        required="true"
                        variant={variant}
                        type="text"
                        placeholder="Placeholder text"
                        fullWidth
                      />
                      <FormHelperText>This is the helper text</FormHelperText>
                      <br />
                    </FormControl>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">Textarea</FormLabel>
                      <TextField
                        required="true"
                        variant={variant}
                        multiline
                        minRows="5"
                        placeholder="Please enter some stuff"
                      />
                      <FormHelperText>This is the helper text</FormHelperText>
                      <br />
                    </FormControl>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">Do you understand this question?</FormLabel>
                      <RadioGroup name="understand question">
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                      <FormHelperText>This is the helper text</FormHelperText>
                      <br />
                    </FormControl>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">Choose an item</FormLabel>
                      <Select
                        native
                        // error={!!errorMsgs[input.id]}
                        required="true"
                        variant={variant}
                      >
                        <option aria-label="None" value="" disabled="true">
                          Select
                        </option>
                        <option value="item 1">Item 1</option>
                        <option value="item 2">Item 2</option>
                        <option value="item 3">Item 3</option>
                      </Select>
                      <FormHelperText>This is the helper text</FormHelperText>
                      <br />
                    </FormControl>
                    <FormControl component="fieldset" fullWidth style={{ marginBottom: '8px' }}>
                      <FormLabel component="legend">
                        Would you like to receive email from us?
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox name="Subscribed to Email" />}
                          label="Yes"
                        />
                      </FormGroup>
                      <FormHelperText>This is the helper text</FormHelperText>
                      <br />
                    </FormControl>
                    {/* <ButtonSubmit type="submit" text={submitBtn.text} {...mapMuiBtnSubmitToProps(btnStyle)} /> */}
                  </form>
                </Box>
              </ThemeProvider>
            </>
          )
        );
      }}
    </QueryContainer>
  );
};

export default FormDesignPreview;
