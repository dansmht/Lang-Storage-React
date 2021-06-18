import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import closeSrc from '../../../assets/images/x-close.svg';
import CustomInput from '../../shared/CustomInput/CustomInput';
import CustomRadioButton from '../../shared/CustomRadioButton/CustomRadioButton';

import classes from './CreateTopicSection.module.scss';

const CreateTopicSection = () => {
  const { register, formState: { errors, dirtyFields }, handleSubmit } = useForm({
    mode: 'all',
  });

  const validateOptions = {
    required: true,
    maxLength: 40,
  };

  const createPropsForInput = (name) => {
    return {
      name,
      errors: errors[name],
      isDirty: dirtyFields[name],
    };
  };

  const onSubmit = data => console.log(data);

  return (
    <section className={classes.CreateTopicSection}>
      <div className={classes.TitleWrapper}>
        <h2 className={classes.Title}>Creating a topic</h2>
        <button className={classes.CloseButton}>
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
          />
          <div className={classes.PrivacyWrapper}>
            <h4>Privacy</h4>
            <CustomRadioButton
              register={register}
              name='Privacy'
              title='Private'
              value='true'
            />
            <CustomRadioButton
              register={register}
              name='Privacy'
              title='Visible to all'
              value='false'
              defaultChecked
            />
          </div>
          <div className={classes.ExamplesBlockWrapper}>
            <h4>Example<span>5</span></h4>
            <div className={classes.LanguageTitles}>
              <span>English</span>
              <span>Russian</span>
            </div>
            <div className={classes.ExamplesWrapper}>
              <CustomInput
                register={register}
                validateOptions={validateOptions}
                {...createPropsForInput('test1')}
              />
              <div
                className={classNames(classes.Divider, {
                  [`${classes.red}`]: errors['test1'] || errors['test2'],
                  [`${classes.green}`]: (!errors['test1'] && dirtyFields['test1']) && (!errors['test2'] && dirtyFields['test2']),
                })}
              />
              <CustomInput
                register={register}
                validateOptions={validateOptions}
                {...createPropsForInput('test2')}
              />
            </div>
          </div>
        </div>
        <button className={classes.SubmitButton} type='submit'>Create a topic</button>
      </form>
    </section>
  );
};

export default CreateTopicSection;
