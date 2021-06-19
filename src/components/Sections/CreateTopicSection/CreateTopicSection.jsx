import React, { Fragment, useMemo } from 'react';
import classNames from 'classnames';
import { useFieldArray, useForm } from 'react-hook-form';

import { TopicsService } from '../../../api/services/topics.service';
import closeSrc from '../../../assets/images/x-close.svg';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomRadioButton from '../../shared/CustomRadioButton/CustomRadioButton';
import CustomButton from '../../shared/CustomButton/CustomButton';
import NestedExamples from '../TopicsSection/NestedExamples/NestedExamples';

import classes from './CreateTopicSection.module.scss';

const CreateTopicSection = () => {

  const defaultValue = useMemo(() => ({ nativeText: '', targetText: '', examples: [] }), []);
  const defaultValues = useMemo(() => ({ item: [defaultValue] }), []);

  const { control, register, formState: { errors, dirtyFields }, handleSubmit, reset } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'item',
  });

  const validateOptions = {
    required: true,
    maxLength: 50,
  };

  const createPropsForInput = (name, isNested = false) => {
    let splitted, splittedErrors, splittedIsDirty;

    if (isNested) {
      splitted = name.split('.');
      splittedErrors = splitted.reduce((acc, cur) => acc?.[cur], errors);
      splittedIsDirty = splitted.reduce((acc, cur) => acc?.[cur], dirtyFields);
    }

    return {
      name,
      errors: isNested ? splittedErrors : errors[name],
      isDirty: isNested ? splittedIsDirty : dirtyFields[name],
    };
  };

  const createNewItem = () => {
    append(defaultValue);
  };

  const resetForm = () => {
    if (window.confirm('Are you sure? All changes will be discarded')) {
      reset(defaultValues);
    }
  };

  const onSubmit = async (data) => {
    const formattedTopicData = {
      name: data['Topic name'],
      isPrivate: data.Privacy === 'private',
      position: Math.random().toString(),
      topicItems: data.item.map((item, position) => ({
        position,
        nativeLocale: 'ru',
        nativeText: item.nativeText,
        targetLocale: 'en',
        targetText: item.targetText,
        examples: item.examples?.map((example) => ({ text: example.value })),
      })),
    };

    await TopicsService.createTopic(formattedTopicData);

    reset(defaultValues);
  };

  return (
    <section className={classes.CreateTopicSection}>
      <div className={classes.TitleWrapper}>
        <h2 className={classes.Title}>Creating a topic</h2>
        <button className={classes.CloseButton} onClick={resetForm}>
          <img src={closeSrc} alt='X' />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.FormWrapper}>
          <CustomInput
            label='Topic name'
            register={register}
            validateOptions={validateOptions}
            {...createPropsForInput('Topic name')}
            maxLength={40}
          />
          <div className={classes.PrivacyWrapper}>
            <h4>Privacy</h4>
            <CustomRadioButton
              register={register}
              name='Privacy'
              title='Private'
              value='private'
            />
            <CustomRadioButton
              register={register}
              name='Privacy'
              title='Visible to all'
              value='public'
              defaultChecked
            />
          </div>
          <div className={classes.ExamplesBlockWrapper}>
            <h4>Example<span>{ fields.length }</span></h4>
            <div className={classes.LanguageTitles}>
              <span>English</span>
              <span>Russian</span>
            </div>

            {
              fields.map((item, index) => (
                <Fragment key={item.id}>
                  <div className={classes.ExamplesWrapper}>
                    <CustomInput
                      register={register}
                      registerName={`item.${index}.targetText`}
                      validateOptions={validateOptions}
                      {...createPropsForInput(`item.${index}.targetText`, true)}
                      maxLength={50}
                    />
                    <div
                      className={classNames(classes.Divider, {
                        [`${classes.red}`]: errors.item?.[index]?.targetText || errors.item?.[index]?.nativeText,
                        [`${classes.green}`]:
                      (!errors.item?.[index]?.targetText && dirtyFields.item?.[index]?.targetText)
                      && (!errors.item?.[index]?.nativeText && dirtyFields.item?.[index]?.nativeText),
                      })}
                    />
                    <CustomInput
                      register={register}
                      registerName={`item.${index}.nativeText`}
                      validateOptions={validateOptions}
                      {...createPropsForInput(`item.${index}.nativeText`, true)}
                      maxLength={50}
                    />
                  </div>
                  <NestedExamples nestIndex={index} control={control} register={register} />
                </Fragment>
              ))
            }

          </div>
          <CustomButton
            label='+ add new example'
            gray
            onClick={createNewItem}
            className={classes.AddExampleButton}
          />
        </div>
        <CustomButton
          label='Create a topic'
          blue
          type='submit'
          className={classes.SubmitButton}
        />
      </form>
    </section>
  );
};

export default CreateTopicSection;
