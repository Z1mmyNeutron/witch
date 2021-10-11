
import React from "react"

/*Paragraph by Kirk Zimmer & Christina Zimmer
My credit is you don't touch the comments in this header... love ya!
Takes in a map of words : fontsizes... only there's one problem, take the case of...

The quick brown fox jumped over the lazy dog... 

we want to affect the fontsize of "the"... but which "the"?

There's a couple ways to address this, perhaps we count the instance of the occurence...

But that requires counting shit, and I'm not about that silliness. Instead, let's just have the context
the pattern occurs in bundled with the pattern. This will allow us to copy+paste for easy mapping...

Algorithm....

1. Construct a tuple of ( pattern, context , {styleProps}} ) Pass it through to props...
2. for every tuple, find the index of the context start. From here, find the first instance of the pattern after
that startIndex occurence.
3. Iteratively and procedurally bundle <spans> with the specified style-map prop. 

To do this,,

Partition the sentence into [pretext] [pattern] [pretext] [pattern] [pretext]

All patterns will accept a span of the unique props
All pretexts are simply texts that appear before patterns, and these should be given the default template.

*/

//accepts props, default, 
export class Text extends React.Component{
    constructor(props){
        super(props)
    }


    deriveComponents() {
        let P = this.props.paragraph

        let b = 0

        if (this.props.b != undefined)
            b = Math.random() * this.props.b

        else
            b = Math.random() * 30

        let m = 0

        if (this.props.m != undefined)
            m = this.props.m
        else
            m = 45



        var htmlString = '<p style="margin-left:' + (m+b) + 'px;margin-right:' + (m+b) + 'px;background-color">' + P +'</p>';

     



        return <div dangerouslySetInnerHTML={{__html:htmlString}} />
      }
    


render(){

    let defaultStyle = {fontSize:25, paddingTop: 10, color:"white"};


    let componentTree = this.deriveComponents()

    console.log(this.props.defaultStyle, "xoxo")
    return(
        <div style={defaultStyle}>
            {componentTree}
        </div>
        )
    }   
}
