## StoryBox React Sample Code 

This sample code demonstrate how to embed storybox display modules using a reusable React Component. 

Replace the script URL in `src/StoryBoxWidget.js` with the one from your desired display module in your StoryBox account. Use the following tag to display the widget:

```
    <StoryBoxWidget />
```

To use this on a product details page, just pass in the appropriate product ID used in your storybox dashboard as follows:

```
    <StoryBoxWidget productId="123456789" />
```

Other available parameters are parentProduct and tags:

```
    <StoryBoxWidget productId="123456789" parentProduct="111" tags="featured" />
```
