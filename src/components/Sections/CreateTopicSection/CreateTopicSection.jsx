import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useFieldArray, useForm } from 'react-hook-form';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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

  const { control, register, formState: { errors, dirtyFields }, handleSubmit, reset, getValues, setValue } = useForm({
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

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { destination, draggableId, source } = result;

    if (!destination || (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    )) {
      return;
    }

    const items = reorder(
      getValues('item'),
      source.index,
      destination.index,
    );

    // TODO fix it
    setValue('item', items);
    console.log('onDragEnd', items);
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

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='droppable-1'>
                {
                  (provided, snapshot) => (
                    <ul
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {
                        fields.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
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
                                    {...provided.dragHandleProps}
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
                              </li>
                            )}
                          </Draggable>
                        ))
                      }
                    </ul>
                  )
                }
              </Droppable>
            </DragDropContext>

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
