/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNavigation } from "../graphql/queries";
import { updateNavigation } from "../graphql/mutations";
const client = generateClient();
export default function NavigationUpdateForm(props) {
  const {
    id: idProp,
    navigation: navigationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    href: "",
    current: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [href, setHref] = React.useState(initialValues.href);
  const [current, setCurrent] = React.useState(initialValues.current);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = navigationRecord
      ? { ...initialValues, ...navigationRecord }
      : initialValues;
    setName(cleanValues.name);
    setHref(cleanValues.href);
    setCurrent(cleanValues.current);
    setErrors({});
  };
  const [navigationRecord, setNavigationRecord] =
    React.useState(navigationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNavigation.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNavigation
        : navigationModelProp;
      setNavigationRecord(record);
    };
    queryData();
  }, [idProp, navigationModelProp]);
  React.useEffect(resetStateValues, [navigationRecord]);
  const validations = {
    name: [],
    href: [],
    current: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          href: href ?? null,
          current: current ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateNavigation.replaceAll("__typename", ""),
            variables: {
              input: {
                id: navigationRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NavigationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              href,
              current,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Href"
        isRequired={false}
        isReadOnly={false}
        value={href}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              href: value,
              current,
            };
            const result = onChange(modelFields);
            value = result?.href ?? value;
          }
          if (errors.href?.hasError) {
            runValidationTasks("href", value);
          }
          setHref(value);
        }}
        onBlur={() => runValidationTasks("href", href)}
        errorMessage={errors.href?.errorMessage}
        hasError={errors.href?.hasError}
        {...getOverrideProps(overrides, "href")}
      ></TextField>
      <SwitchField
        label="Current"
        defaultChecked={false}
        isDisabled={false}
        isChecked={current}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              href,
              current: value,
            };
            const result = onChange(modelFields);
            value = result?.current ?? value;
          }
          if (errors.current?.hasError) {
            runValidationTasks("current", value);
          }
          setCurrent(value);
        }}
        onBlur={() => runValidationTasks("current", current)}
        errorMessage={errors.current?.errorMessage}
        hasError={errors.current?.hasError}
        {...getOverrideProps(overrides, "current")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || navigationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || navigationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
