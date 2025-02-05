<template>
    <section>
        <h2>My Friends</h2>
        <ul>
          <friend-contact></friend-contact>  
          <friend-contact></friend-contact>  
        </ul>
    </section>
</template>

<script>
export default {
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        number: '010-8489-3121',
                        email: 'googgo@google.com'
                    },
                    {
                        id: 'HWT',
                        name: 'Manuel hhh',
                        number: '010-222-3121',
                        email: 'goodkdk@google.com'
                    },
                ]
            }
        },

    }
</script>