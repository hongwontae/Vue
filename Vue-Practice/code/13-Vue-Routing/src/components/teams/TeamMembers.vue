<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/terms/t2">Go to Team</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ["teamId"],
  inject : ['users', 'teams'],
  created(){
    this.loadTeamMembers(this.teamId);
  },
  methods : {
    loadTeamMembers(teamId){
    
    const selectedTeam = this.teams.find((ele)=>{
      return ele.id == teamId
    })
    console.log(this.teams)

    const members = selectedTeam.members;
    const selectedMember = [];

    for(const member of members){
      const selectUser = this.users.find(user => user.id === member);
      selectedMember.push(selectUser)
    }

    this.members = selectedMember;
    this.teamName = selectedTeam.name
    
    }
  },
  watch : {
    teamId(newId){
      this.loadTeamMembers(newId)
    }
  },
  data() {
    return {
      teamName : '',
      members : []
    };
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>