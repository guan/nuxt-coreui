import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
	return new Vuex.Store( {
		state    : {
			auth: null
		},
		mutations: {
			update( state, data ) {
				state.auth = data;
			}
		},
		actions  : {
			nuxtServerInit( { commit }, { req } ) {

				let accessTokenJSON = localStorage.getItem( 'jwt_token' );
				let accessToken     = (accessTokenJSON !== null) ? JSON.parse( accessTokenJSON ) : null;

				commit( 'update', accessToken )

			},
			logout( { commit } ) {
				Cookie.remove( 'auth' );
				commit( 'update', null );
			}
		}
	} )
};

export default createStore