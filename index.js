import React from "react"

import Grid from '@material-ui/core/Grid'

/*  G takes in 1, 2, or 3 components

props = component count

props will also take a list of integers...

*/
export default class G extends React.Component{
    constructor(props){
        super(props)
    }

    grid1 = () => {
        let dims = this.props.dims
        let content = this.props.content

        if(dims.length != 3) {
            return <p>For G len=1, you need len(dims) = 3... it does not atm..</p>
        }

        if(content.length != 1) {
            return <p>For G len=1, you need len(content) = 1...</p>
        }



       return (
        
        <Grid padding={0} container spacing={0}>
        <Grid item xs={dims[0]}/>

        <Grid item xs={dims[1]} >
            {content[0]}
           
        </Grid>

        <Grid item xs={dims[2]}/>
    </Grid>
    )

    }

    grid2 = () => {
         let dims = this.props.dims
         let content = this.props.content
         if(dims.length != 5) {
            return <p>For G len=2, you need len(dims) = 5... it does not atm..</p>
        }

        if(content.length != 2) {
            return <p>For G len=2, you need len(content) = 2...</p>
        }
        
        return (
        <Grid padding={0} container spacing={0}>
            <Grid item xs={dims[0]}/>

            <Grid item xs={dims[1]}>
               {content[0]}
            </Grid>

            <Grid item xs={dims[2]}/>


            <Grid item xs={dims[3]}>
                {content[1]}
            </Grid>

            <Grid item xs={4}/>
        </Grid>
        )

    }

    grid3 = () => {
        let dims = this.props.dims
        let content = this.props.content
        if(dims.length != 7) {
           return <p>For G len=3, you need len(dims) = 7... it does not atm..</p>
       }

       if(content.length != 3) {
           return <p>For G len=3, you need len(content) = 3...</p>
       }
      return (  
            <Grid padding={0} container spacing={0}>
            <Grid item xs={dims[0]}/>

            <Grid item xs={dims[1]}>
                {content[0]}
            </Grid>

            <Grid item xs={dims[2]}/>


            <Grid item xs={dims[3]}>
                {content[1]}
            </Grid>

            <Grid item xs={dims[4]}/>
                
            <Grid item xs={5}>
                {content[2]}
            </Grid>

            <Grid item xs={0}/>
        </Grid>
        )
    }

    grid4 = () => {
        let dims = this.props.dims
        let content = this.props.content
        if(dims.length != 9) {
           return <p>For G len=4, you need len(dims) = 9... it does not atm..</p>
       }

       if(content.length != 4) {
           return <p>For G len=4, you need len(content) = 4...</p>
       }
      return (  
            <Grid padding={0} container spacing={0}>
            <Grid item xs={dims[0]}/>

            <Grid item xs={dims[1]}>
                {content[0]}
            </Grid>

            <Grid item xs={dims[2]}/>


            <Grid item xs={dims[3]}>
                {content[1]}
            </Grid>

            <Grid item xs={dims[4]}/>
                
            <Grid item xs={5}>
                {content[2]}
            </Grid>

            <Grid item xs={6}/>

            <Grid item xs={7}>
                {content[3]}
            </Grid>

            <Grid item xs={8}/>
        </Grid>
        )
    }

    grid5 = () => {
        let dims = this.props.dims
        let content = this.props.content
        if(dims.length != 11) {
           return <p>For G len=5, you need len(dims) = 11... it does not atm..</p>
       }

       if(content.length != 5) {
           return <p>For G len=5, you need len(content) = 5...</p>
       }
      return (  
            <Grid padding={0} container spacing={0}>
            <Grid item xs={dims[0]}/>

            <Grid item xs={dims[1]}>
                {content[0]}
            </Grid>

            <Grid item xs={dims[2]}/>


            <Grid item xs={dims[3]}>
                {content[1]}
            </Grid>

            <Grid item xs={dims[4]}/>
                
            <Grid item xs={5}>
                {content[2]}
            </Grid>

            <Grid item xs={6}/>

            <Grid item xs={7}>
                {content[3]}
            </Grid>

            <Grid item xs={8}/>

            <Grid item xs={9}>
                {content[5]}
            </Grid>

            <Grid item xs={10}/>

            <Grid item xs={11}>
                {content[6]}
            </Grid>


        </Grid>
        )
    }


    render(){
        if(this.props.count == 5){
            return this.grid5()
        }else if(this.props.count == 4){
            return this.grid4()
        }else if(this.props.count == 3) {
            return this.grid3()
        } else if(this.props.count == 2) {
            return this.grid2()
        } else if(this.props.count == 1) {
            return this.grid1()
        }

        return (
            <p>You need to specify the grid count as [1, 2, 3,4,5]</p>
        )
    }
}