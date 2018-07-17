import React, { Component } from 'react';

class StoryBoxWidget extends Component {

    componentDidMount() {
        if (document.getElementById('StoryBoxJS') === null) {
            window.vgModuleSettings = {
                containerId: 'StoryBoxWidget'
            }
            
            window.vgModuleSettings.tags = this.props.tags || '';
            if (this.props.productId) {
                window.vgModuleSettings.tags = (window.vgModuleSettings.tags? ',':'') + 'Product:' + this.props.productId;
                window.product = {
                    key: this.props.productId,
                    pkey: this.props.parentProduct || ''
                }
            }
            
            var s = document.createElement('script');
            s.id = 'StoryBoxJS'; 
            s.type = 'text/javascript';

            // TODO: Replace the following URL with the one from your own display module. You can find this URL
            //       by going to StoryBox dashboard -> Displays -> Get Code after selecting the specific
            //       display module you would like to use. The URL is used on all embed codes as src attribute
            //       of the <script> tags.
            s.src = '//app.getstorybox.com/c/sts/608f8/southern-tide-stories.js'; 
            
            document.body.appendChild(s);
        }
    }

    render() {
        return (
            <div id="StoryBoxWidget" />
        );
    }

}

export default StoryBoxWidget;
